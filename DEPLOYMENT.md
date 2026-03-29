# RentConnect Burundi - Deployment Guide

## MySQL Master-Slave Replication Setup

### 1. Master Database Configuration

Edit MySQL config on master server (`/etc/mysql/my.cnf`):

```ini
[mysqld]
server-id = 1
log_bin = /var/log/mysql/mysql-bin.log
binlog_do_db = rentconnect_burundi
```

Restart MySQL:
```bash
sudo systemctl restart mysql
```

Create replication user:
```sql
CREATE USER 'replication_user'@'%' IDENTIFIED BY 'strong_password';
GRANT REPLICATION SLAVE ON *.* TO 'replication_user'@'%';
FLUSH PRIVILEGES;
SHOW MASTER STATUS;
```

Note the `File` and `Position` values.

### 2. Slave Database Configuration

Edit MySQL config on slave server:

```ini
[mysqld]
server-id = 2
relay-log = /var/log/mysql/mysql-relay-bin.log
log_bin = /var/log/mysql/mysql-bin.log
binlog_do_db = rentconnect_burundi
read_only = 1
```

Restart MySQL:
```bash
sudo systemctl restart mysql
```

Configure slave:
```sql
CHANGE MASTER TO
  MASTER_HOST='master_ip_address',
  MASTER_USER='replication_user',
  MASTER_PASSWORD='strong_password',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=12345;

START SLAVE;
SHOW SLAVE STATUS\G
```

### 3. Laravel Configuration

Update `.env`:
```env
# Master (Write)
DB_HOST=master_ip_address
DB_PORT=3306

# Slave (Read)
DB_READ_HOST=slave_ip_address
DB_READ_PORT=3306
```

### 4. Backend Deployment

```bash
cd backend

# Install dependencies
composer install --optimize-autoloader --no-dev

# Setup environment
cp .env.example .env
php artisan key:generate

# Run migrations on master
php artisan migrate --force

# Seed database
php artisan db:seed --force

# Cache config
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set permissions
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### 5. Frontend Deployment

```bash
# Build frontend
npm install
npm run build

# Deploy dist folder to web server
```

### 6. Web Server Configuration (Nginx)

Backend API:
```nginx
server {
    listen 80;
    server_name api.rentconnect.bi;
    root /var/www/rentconnect-backend/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Frontend:
```nginx
server {
    listen 80;
    server_name rentconnect.bi;
    root /var/www/rentconnect-frontend/dist;

    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 7. SSL Configuration

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d rentconnect.bi -d api.rentconnect.bi
```

### 8. Monitoring

Check replication status:
```sql
-- On slave
SHOW SLAVE STATUS\G

-- Check for:
-- Slave_IO_Running: Yes
-- Slave_SQL_Running: Yes
-- Seconds_Behind_Master: 0
```

### 9. Backup Strategy

Master database backup:
```bash
mysqldump -u root -p rentconnect_burundi > backup_$(date +%Y%m%d).sql
```

Automated daily backups:
```bash
0 2 * * * /usr/bin/mysqldump -u root -p'password' rentconnect_burundi > /backups/db_$(date +\%Y\%m\%d).sql
```

## Production Checklist

- [ ] Master-Slave replication configured and tested
- [ ] SSL certificates installed
- [ ] Environment variables secured
- [ ] Database backups automated
- [ ] File upload storage configured
- [ ] Error logging enabled
- [ ] Rate limiting configured
- [ ] CORS properly configured
- [ ] API documentation published
- [ ] Monitoring tools setup

## Performance Optimization

1. Enable Redis for caching:
```env
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
```

2. Enable OPcache in PHP
3. Use CDN for static assets
4. Enable Gzip compression
5. Optimize images before upload

## Security

- Keep Laravel and dependencies updated
- Use strong database passwords
- Enable firewall rules
- Regular security audits
- Monitor access logs
- Implement rate limiting
- Use HTTPS everywhere
