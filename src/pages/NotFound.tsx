import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center gap-8 py-20 text-center">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl font-bold tracking-tight">Страница не найдена</h2>
          <p className="text-muted-foreground">
            Извините, запрашиваемая страница не существует или была перемещена.
          </p>
        </div>
        <Link to="/">
          <Button className="gradient-bg btn-animation">
            <Home className="mr-2 h-4 w-4" /> Вернуться на главную
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
