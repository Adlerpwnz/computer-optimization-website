import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cpu, 
  Settings, 
  Clock, 
  Gamepad, 
  HardDrive, 
  Shield,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  
  const texts = {
    ru: {
      title: "Наши услуги",
      description: "Комплексные решения для оптимизации вашего компьютера",
      categories: {
        windows: "Windows",
        bios: "BIOS",
        latency: "Latency",
        gameSpecific: "Game-Specific",
        hardware: "Hardware",
        stability: "Stability"
      },
      services: {
        windows: [
          {
            title: "Базовая оптимизация Windows",
            description: "Настройка основных параметров Windows для повышения производительности",
            price: "1500 ₽",
            features: ["Отключение ненужных служб", "Настройка планировщика", "Очистка автозагрузки"]
          },
          {
            title: "Продвинутая оптимизация Windows",
            description: "Глубокая оптимизация системы для максимальной производительности",
            price: "3000 ₽",
            features: ["Все опции базовой оптимизации", "Настройка реестра", "Оптимизация драйверов"]
          },
          {
            title: "Премиум оптимизация Windows",
            description: "Полная оптимизация с индивидуальным подходом",
            price: "5000 ₽",
            features: ["Все опции продвинутой оптимизации", "Тонкая настройка под ваше железо", "Поддержка после оптимизации"]
          }
        ],
        bios: [
          {
            title: "Настройка BIOS/UEFI",
            description: "Базовая настройка BIOS для улучшения производительности",
            price: "2000 ₽",
            features: ["Активация XMP/DOCP", "Настройка параметров питания", "Обновление BIOS"]
          },
          {
            title: "Продвинутая настройка BIOS",
            description: "Расширенные настройки BIOS для максимальной производительности",
            price: "4000 ₽",
            features: ["Тонкая настройка таймингов памяти", "Настройка питания процессора", "Оптимизация частот"]
          }
        ],
        latency: [
          {
            title: "Базовая оптимизация задержек",
            description: "Снижение задержек для игр и приложений",
            price: "2000 ₽",
            features: ["Настройка сетевых параметров", "Оптимизация ввода", "Минимизация задержек графики"]
          },
          {
            title: "Продвинутая оптимизация задержек",
            description: "Комплексное снижение задержек для профессиональных игроков",
            price: "4000 ₽",
            features: ["Все опции базовой оптимизации", "Тонкая настройка прерываний", "Перераспределение нагрузки ядер"]
          }
        ],
        gameSpecific: [
          {
            title: "Оптимизация для шутеров",
            description: "Тонкая настройка системы для максимальной производительности в шутерах",
            price: "2500 ₽",
            features: ["Настройка драйверов", "Оптимальные настройки игр", "Снижение задержек ввода"]
          },
          {
            title: "Оптимизация для MOBA/MMO",
            description: "Настройка системы для стратегий и многопользовательских игр",
            price: "2500 ₽",
            features: ["Стабилизация FPS", "Настройка сетевых параметров", "Оптимизация многопоточности"]
          }
        ],
        hardware: [
          {
            title: "Рекомендации по апгрейду",
            description: "Анализ текущей конфигурации и рекомендации по улучшению",
            price: "1000 ₽",
            features: ["Анализ узких мест", "Рекомендации по комплектующим", "Оценка стоимости апгрейда"]
          },
          {
            title: "Подбор комплектующих",
            description: "Полный подбор конфигурации компьютера под ваши задачи",
            price: "3000 ₽",
            features: ["Индивидуальный подбор комплектующих", "Проверка совместимости", "Планирование апгрейдов"]
          }
        ],
        stability: [
          {
            title: "Тестирование стабильности",
            description: "Проверка системы на стабильность и устранение проблем",
            price: "2000 ₽",
            features: ["Стресс-тесты железа", "Диагностика ошибок", "Рекомендации по улучшению"]
          },
          {
            title: "Комплексная стабилизация",
            description: "Полная проверка и настройка системы для максимальной стабильности",
            price: "4000 ₽",
            features: ["Диагностика всех компонентов", "Исправление проблем", "Оптимизация температурного режима"]
          }
        ]
      },
      cta: "Подробнее"
    },
    en: {
      title: "Our Services",
      description: "Comprehensive solutions for optimizing your computer",
      categories: {
        windows: "Windows",
        bios: "BIOS",
        latency: "Latency",
        gameSpecific: "Game-Specific",
        hardware: "Hardware",
        stability: "Stability"
      },
      services: {
        windows: [
          {
            title: "Basic Windows Optimization",
            description: "Configuring basic Windows parameters to improve performance",
            price: "$30",
            features: ["Disabling unnecessary services", "Task scheduler configuration", "Startup cleanup"]
          },
          {
            title: "Advanced Windows Optimization",
            description: "Deep system optimization for maximum performance",
            price: "$60",
            features: ["All basic optimization options", "Registry tweaks", "Driver optimization"]
          },
          {
            title: "Premium Windows Optimization",
            description: "Complete optimization with individual approach",
            price: "$100",
            features: ["All advanced optimization options", "Fine-tuning for your hardware", "Post-optimization support"]
          }
        ],
        bios: [
          {
            title: "BIOS/UEFI Setup",
            description: "Basic BIOS configuration to improve performance",
            price: "$40",
            features: ["XMP/DOCP activation", "Power settings configuration", "BIOS update"]
          },
          {
            title: "Advanced BIOS Setup",
            description: "Advanced BIOS settings for maximum performance",
            price: "$80",
            features: ["Memory timing fine-tuning", "CPU power configuration", "Frequency optimization"]
          }
        ],
        latency: [
          {
            title: "Basic Latency Optimization",
            description: "Reducing latency for games and applications",
            price: "$40",
            features: ["Network parameters setup", "Input optimization", "Graphics latency minimization"]
          },
          {
            title: "Advanced Latency Optimization",
            description: "Comprehensive latency reduction for professional gamers",
            price: "$80",
            features: ["All basic optimization options", "Fine-tuning interrupts", "Core load redistribution"]
          }
        ],
        gameSpecific: [
          {
            title: "FPS Games Optimization",
            description: "Fine-tuning the system for maximum performance in shooters",
            price: "$50",
            features: ["Driver configuration", "Optimal game settings", "Input lag reduction"]
          },
          {
            title: "MOBA/MMO Optimization",
            description: "System configuration for strategies and multiplayer games",
            price: "$50",
            features: ["FPS stabilization", "Network parameters setup", "Multithreading optimization"]
          }
        ],
        hardware: [
          {
            title: "Upgrade Recommendations",
            description: "Analysis of current configuration and upgrade recommendations",
            price: "$20",
            features: ["Bottleneck analysis", "Component recommendations", "Upgrade cost estimation"]
          },
          {
            title: "Component Selection",
            description: "Complete computer configuration selection for your tasks",
            price: "$60",
            features: ["Individual component selection", "Compatibility check", "Upgrade planning"]
          }
        ],
        stability: [
          {
            title: "Stability Testing",
            description: "Testing system stability and troubleshooting",
            price: "$40",
            features: ["Hardware stress tests", "Error diagnostics", "Improvement recommendations"]
          },
          {
            title: "Comprehensive Stabilization",
            description: "Complete system check and configuration for maximum stability",
            price: "$80",
            features: ["All component diagnostics", "Problem fixing", "Temperature regime optimization"]
          }
        ]
      },
      cta: "Details"
    }
  };
  
  const content = language === 'ru' ? texts.ru : texts.en;
  const categoryIcons = {
    windows: <Settings className="h-5 w-5" />,
    bios: <Cpu className="h-5 w-5" />,
    latency: <Clock className="h-5 w-5" />,
    gameSpecific: <Gamepad className="h-5 w-5" />,
    hardware: <HardDrive className="h-5 w-5" />,
    stability: <Shield className="h-5 w-5" />
  };

  return (
    <Layout>
      <div className="container py-8 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{content.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{content.description}</p>
        </div>
        
        <Tabs defaultValue="windows" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="windows" className="flex items-center gap-2 btn-animation">
              {categoryIcons.windows} {content.categories.windows}
            </TabsTrigger>
            <TabsTrigger value="bios" className="flex items-center gap-2 btn-animation">
              {categoryIcons.bios} {content.categories.bios}
            </TabsTrigger>
            <TabsTrigger value="latency" className="flex items-center gap-2 btn-animation">
              {categoryIcons.latency} {content.categories.latency}
            </TabsTrigger>
            <TabsTrigger value="gameSpecific" className="flex items-center gap-2 btn-animation">
              {categoryIcons.gameSpecific} {content.categories.gameSpecific}
            </TabsTrigger>
            <TabsTrigger value="hardware" className="flex items-center gap-2 btn-animation">
              {categoryIcons.hardware} {content.categories.hardware}
            </TabsTrigger>
            <TabsTrigger value="stability" className="flex items-center gap-2 btn-animation">
              {categoryIcons.stability} {content.categories.stability}
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(content.services).map(([key, services]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, i) => (
                  <Card key={i} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-animation">
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-2xl font-bold gradient-text">{service.price}</div>
                      <ul className="space-y-2">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <span className="mr-2 text-primary">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full mt-4 btn-animation">
                        {content.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default ServicesPage;
