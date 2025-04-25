import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CardHover } from '@/components/ui/card-hover';
import { 
  Cpu, 
  Settings, 
  Clock, 
  Gamepad, 
  HardDrive, 
  Shield,
  ArrowRight,
  Star,
  Zap,
  ChevronRight
} from 'lucide-react';

const HomePage = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  
  // This would normally come from a context or i18n library
  const texts = {
    ru: {
      hero: {
        title: 'Максимальная производительность вашего компьютера',
        subtitle: 'Профессиональная оптимизация для игр, работы и стабильности системы',
        cta: 'Узнать больше'
      },
      services: {
        title: 'Наши услуги',
        viewAll: 'Все услуги',
        items: [
          {
            title: 'Windows',
            description: 'Оптимизация операционной системы для максимальной производительности'
          },
          {
            title: 'BIOS',
            description: 'Настройка BIOS/UEFI для раскрытия полного потенциала железа'
          },
          {
            title: 'Latency',
            description: 'Снижение задержек для лучшего отклика во время игр'
          }
        ]
      },
      benefits: {
        title: 'Почему выбирают нас',
        items: [
          {
            title: 'Профессиональный подход',
            description: 'Индивидуальные решения для каждого клиента'
          },
          {
            title: 'Гарантированный результат',
            description: 'Измеримое улучшение производительности системы'
          },
          {
            title: 'Быстрая поддержка',
            description: 'Помощь в решении возникших вопросов'
          }
        ]
      },
      cta: {
        title: 'Готовы увеличить производительность?',
        subtitle: 'Ознакомьтесь с нашими услугами и выберите подходящее решение',
        button: 'Перейти к услугам'
      }
    },
    en: {
      hero: {
        title: 'Maximize Your Computer Performance',
        subtitle: 'Professional optimization for gaming, work, and system stability',
        cta: 'Learn more'
      },
      services: {
        title: 'Our Services',
        viewAll: 'View all',
        items: [
          {
            title: 'Windows',
            description: 'Operating system optimization for maximum performance'
          },
          {
            title: 'BIOS',
            description: 'BIOS/UEFI setup to unlock full hardware potential'
          },
          {
            title: 'Latency',
            description: 'Reducing latency for better responsiveness in games'
          }
        ]
      },
      benefits: {
        title: 'Why Choose Us',
        items: [
          {
            title: 'Professional Approach',
            description: 'Individual solutions for each client'
          },
          {
            title: 'Guaranteed Results',
            description: 'Measurable improvement in system performance'
          },
          {
            title: 'Quick Support',
            description: 'Help in resolving any issues'
          }
        ]
      },
      cta: {
        title: 'Ready to boost performance?',
        subtitle: 'Check out our services and choose the right solution',
        button: 'Go to services'
      }
    }
  };
  
  const content = language === 'ru' ? texts.ru : texts.en;
  const icons = [<Cpu key="cpu" />, <Settings key="settings" />, <Clock key="clock" />];
  const benefitIcons = [<Star key="star" />, <Zap key="zap" />, <Shield key="shield" />];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {content.hero.title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {content.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/services">
                  <Button size="lg" className="gradient-bg btn-animation">
                    {content.hero.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96">
                <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-2xl animate-pulse-light" />
                <img 
                  src="https://images.unsplash.com/photo-1551428069-3d82c58bbc54?q=80&w=1000&auto=format&fit=crop" 
                  alt="Gaming PC Setup" 
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">{content.services.title}</h2>
            <Link to="/services" className="group flex items-center text-primary">
              <span>{content.services.viewAll}</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((service, i) => (
              <CardHover
                key={i}
                icon={icons[i]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">{content.benefits.title}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.benefits.items.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="rounded-full w-12 h-12 flex items-center justify-center gradient-bg text-white">
                  {benefitIcons[i]}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 gradient-bg text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">{content.cta.title}</h2>
            <p className="text-lg opacity-90">{content.cta.subtitle}</p>
            <div className="pt-4">
              <Link to="/services">
                <Button size="lg" variant="secondary" className="btn-animation">
                  {content.cta.button}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
