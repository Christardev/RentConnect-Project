# Contributing to RentConnect Burundi

Thank you for your interest in contributing to RentConnect Burundi!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/rentconnect-burundi.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes
6. Commit: `git commit -m "Add your feature"`
7. Push: `git push origin feature/your-feature-name`
8. Create a Pull Request

## Development Setup

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

## Code Style

- Follow existing code patterns
- Use meaningful variable names
- Comment complex logic
- Keep functions small and focused

## Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove)
- Keep the first line under 50 characters

## Pull Request Process

1. Update README.md with details of changes if needed
2. Update documentation for new features
3. Ensure all tests pass
4. Request review from maintainers

## Reporting Issues

- Use GitHub Issues
- Provide clear description
- Include steps to reproduce
- Add screenshots if applicable

## Questions?

Open an issue or contact the maintainers.

Thank you for contributing! 🎉
