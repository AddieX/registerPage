# Create Account Portal - Multilingual

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Language Count](https://img.shields.io/badge/languages-10-blue.svg)](README.md)

A modern, responsive account creation form with comprehensive multilingual support designed for global accessibility.

## ✨ Key Features

- 🌐 Support for 10 languages with automatic RTL layout
- 📱 Responsive design optimized for all devices
- ♿ WCAG 2.1 AA accessibility compliance
- 🔒 Built-in form validation
- 💾 Language preference persistence
- 🎨 Customizable theming

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
  - [Multilingual Support](#multilingual-support)
  - [Form Elements](#form-elements)
  - [Language Selector](#language-selector)
- [Browser Compatibility](#browser-compatibility)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
- [Customization](#customization)
  - [Adding a New Language](#adding-a-new-language)
  - [Styling Changes](#styling-changes)
- [Accessibility](#accessibility)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This project provides a clean, user-friendly account creation interface with the following features:

- **Multilingual Support**: Available in 10 languages including English, French, Spanish, German, Arabic, Chinese, Japanese, Russian, Portuguese, and Italian
- **RTL Support**: Automatically adjusts layout for right-to-left languages like Arabic
- **Form Validation**: Client-side validation for email, password requirements, and required fields
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Language Persistence**: Remembers the user's language preference using localStorage
- **Accessible Design**: Follows WCAG guidelines for accessibility

## Technologies Used

- **HTML5** for semantic structure and form elements
- **CSS3** with:
  - Flexbox layout for responsive design
  - CSS Variables for consistent theming
  - Media queries for device optimization
- **Vanilla JavaScript** for:
  - DOM manipulation
  - Form validation
  - Language switching
  - LocalStorage integration
- **Flag Icons** from [flag-icon-css](https://github.com/lipis/flag-icon-css) library for visual language representation

## Features

### Multilingual Support

The interface seamlessly switches between 10 languages, automatically adjusting text direction for RTL languages:

- 🇺🇸 English (default)
- 🇫🇷 French
- 🇪🇸 Spanish
- 🇩🇪 German
- 🇮🇶 Arabic (with RTL support)
- 🇨🇳 Chinese
- 🇯🇵 Japanese
- 🇷🇺 Russian
- 🇵🇹 Portuguese
- 🇮🇹 Italian

All text elements use data attributes to store translations, making it easy to add or modify language support without changing application logic.

### Form Elements

- **Name Fields**: First and Last Name fields with validation for minimum length
- **Password Creation**:
  - Password field with minimum length requirement (6 characters)
  - Confirmation field with match validation
- **Email Validation**: Standards-compliant email address validation
- **Multilingual Buttons**: Submit and Reset buttons with translations in all supported languages

### Language Selector

An easy-to-use dropdown menu with flags representing each available language, allowing users to seamlessly switch between languages without losing form data. The selector:

- Displays the current language with its flag
- Preserves form data when switching languages
- Remembers the user's preference using localStorage
- Automatically adjusts UI direction for RTL languages

## Browser Compatibility

The application has been tested and works on:

| Browser        | Minimum Version |
| -------------- | --------------- |
| Chrome         | 80+             |
| Firefox        | 75+             |
| Safari         | 13+             |
| Edge           | 80+             |
| iOS Safari     | 13+             |
| Android Chrome | 80+             |

## Getting Started

### Prerequisites

- Any modern web browser
- Basic understanding of HTML/CSS/JS for customization

### Installation

1. Clone this repository

   ```bash
   git clone https://github.com/yourusername/registerPage.git
   cd registerPage
   ```

2. No build process is required! The application is pure HTML/CSS/JS.

3. Open `App.html` in your web browser to view and test the form.

### Deployment

You can deploy this application to any static web hosting service:

1. **GitHub Pages**:

   - Push to your GitHub repository
   - Enable GitHub Pages in repository settings

2. **Netlify/Vercel**:

   - Connect your repository
   - Set the publish directory to the root folder

3. **Traditional Hosting**:
   - Upload all files to your web server via FTP

## Customization

The project structure makes it easy to customize:

### Adding a New Language

1. Add new data attributes to all translatable elements in `App.html`:

   ```html
   data-[language-code]="Translated text"
   ```

2. Add the language to the dropdown menu in `App.html`:

   ```html
   <a href="#" data-lang="new-lang">
     <span class="flag-icon flag-icon-[country-code]"></span> Language Name
   </a>
   ```

3. Update the `flagMap` object in `src/js/main.js`:

   ```javascript
   const flagMap = {
     // ... existing languages
     "new-lang": "country-code",
   };
   ```

4. If the language is RTL, add it to the `rtlLanguages` array in `src/js/main.js`:
   ```javascript
   const rtlLanguages = ["ar", "new-lang-if-rtl"];
   ```

### Styling Changes

- Edit `src/css/main.css` to change colors, fonts, spacing, etc.
- The form uses CSS variables at the top of the file for easy theming

## Accessibility

This form follows WCAG 2.1 AA guidelines including:

- **Semantic HTML Structure**: Proper use of headings, labels, and form elements
- **Keyboard Navigation**: All form elements and controls are accessible via keyboard
- **Color Contrast**: All text meets minimum contrast requirements (4.5:1 for normal text)
- **Screen Reader Support**:
  - Proper labeling of form elements
  - ARIA attributes where appropriate
- **Focus Management**: Visible focus indicators for keyboard navigation
- **Language Attributes**: Proper language attributes that update when language changes

## Future Enhancements

- Social media login options
- Dark mode support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
