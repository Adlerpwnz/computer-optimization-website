import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const { language } = useLanguage();
  
  const texts = {
    ru: {
      title: "Страница не найдена",
      description: "Извините, страница, которую вы ищете, не существует или была перемещена.",
      button: "Вернуться на главную"
    },
    en: {
      title: "Page Not Found",
      description: "Sorry, the page you are looking for doesn't exist or has been moved.",
      button: "Return to Home"
    }
  };
  
  const content = language === 'ru' ? texts.ru : texts.en;

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center py-16 px-4">
        <h1 className="text-9xl font-bold gradient-text">404</h1>
        <h2 className="text-3xl font-bold mt-8">{content.title}</h2>
        <p className="text-muted-foreground mt-4 max-w-md">
          {content.description}
        </p>
        <Link to="/" className="mt-8">
          <Button className="gradient-bg btn-animation">
            <Home className="mr-2 h-4 w-4" />
            {content.button}
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
