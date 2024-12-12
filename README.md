# GT Performance & Design WordPress Theme

A custom WordPress theme for GT Performance & Design auto shop.

## Installation

1. Upload the theme zip file through WordPress admin panel (Appearance > Themes > Add New > Upload Theme)
2. Activate the theme
3. Configure your homepage to use the default template

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build theme:
```bash
chmod +x build-theme.sh
./build-theme.sh
```

This will create a `gtperformance-theme.zip` file that can be installed in WordPress.

## Requirements

- WordPress 5.8+
- PHP 7.4+
- Node.js 16+