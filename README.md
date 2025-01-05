# ChoXanh Admin Dashboard

A modern React-based dashboard for marketplace management, featuring inventory tracking, order management, and user administration. Original created as a admin template for ChoXanh Marketplace Project by Nam Vu.

## Features

- Real-time inventory tracking
- Order management system
- User administration
- Dark mode support
- Responsive design
- Customizable UI components

## Technology Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context
- **Build Tool**: Vite

## Installation

1. Clone the repository:
```sh
git clone https://github.com/GPT-Engineer-App/dark-warehouse-dashboard.git
cd dark-warehouse-dashboard
```

2. Install dependencies:
```sh
npm install
```

3. Start development server:
```sh
npm run dev
```

## Project Structure

```
src/
├── components/      # Reusable UI components
├── context/         # React context providers
├── lib/             # Utility functions
├── pages/           # Application pages
│   ├── Index.jsx
│   ├── Inventory.jsx
│   ├── Orders.jsx
│   ├── Settings.jsx
│   └── Users.jsx
```

## Available Pages

- **Dashboard**: Overview of warehouse operations
- **Inventory**: Manage and track stock levels
- **Orders**: Process and monitor orders
- **Users**: Manage user accounts and permissions
- **Settings**: Configure system preferences

## UI Components

The project uses shadcn/ui components with custom styling. Available components include:

- Accordion
- Alert
- Avatar
- Badge
- Button
- Card
- Date Picker
- Dialog
- Dropdown
- Form
- Input
- Table
- Toast
- Tooltip

## Development

To start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:5173`

## Deployment

The application can be deployed using:

1. **Vercel**: Recommended for production deployments
2. **Netlify**: Alternative deployment platform
3. **GitHub Pages**: For static hosting

To build for production:
```sh
npm run build
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT License
