import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { 
  MessageSquare, 
  Send, 
  Mail,
  Copy,
  CheckCircle,
  MessageCircle,
  BadgeInfo
} from 'lucide-react';

const ContactPage = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [copied, setCopied] = useState<{ discord: boolean, telegram: boolean, email: boolean }>({
    discord: false,
    telegram: false,
    email: false
  });
  
  const texts = {
    ru: {
      title: "Свяжитесь с нами",
      description: "Выберите удобный способ связи или заполните форму ниже",
      form: {
        title: "Отправить сообщение",
        name: "Ваше имя",
        email: "Email",
        message: "Сообщение",
        send: "Отправить",
        success: "Сообщение отправлено! Мы свяжемся с вами в ближайшее время."
      },
      social: {
        title: "Связаться напрямую",
        telegram: "Telegram",
        discord: "Discord",
        email: "Email"
      },
      copy: "Копировать",
      copied: "Скопировано!",
      faq: {
        title: "Часто задаваемые вопросы",
        items: [
          {
            question: "Сколько времени занимает оптимизация?",
            answer: "Время оптимизации зависит от выбранного пакета услуг. Базовая оптимизация обычно занимает 1-2 часа, а комплексная оптимизация может занять до 24 часов."
          },
          {
            question: "Как происходит процесс оптимизации?",
            answer: "После заказа услуги мы связываемся с вами для уточнения деталей. Затем проводим удаленную оптимизацию через TeamViewer или AnyDesk, либо предоставляем пошаговую инструкцию."
          },
          {
            question: "Предоставляете ли вы гарантию?",
            answer: "Да, мы гарантируем улучшение производительности вашей системы. Если результат вас не устроит, мы вернем деньги или предоставим дополнительную оптимизацию."
          }
        ]
      }
    },
    en: {
      title: "Contact Us",
      description: "Choose a convenient way to connect or fill out the form below",
      form: {
        title: "Send a Message",
        name: "Your Name",
        email: "Email",
        message: "Message",
        send: "Send",
        success: "Message sent! We'll contact you shortly."
      },
      social: {
        title: "Contact Directly",
        telegram: "Telegram",
        discord: "Discord",
        email: "Email"
      },
      copy: "Copy",
      copied: "Copied!",
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "How long does the optimization take?",
            answer: "The optimization time depends on the chosen service package. Basic optimization usually takes 1-2 hours, while comprehensive optimization can take up to 24 hours."
          },
          {
            question: "How does the optimization process work?",
            answer: "After ordering the service, we contact you to clarify details. Then we conduct remote optimization via TeamViewer or AnyDesk, or provide step-by-step instructions."
          },
          {
            question: "Do you provide a guarantee?",
            answer: "Yes, we guarantee an improvement in your system's performance. If you're not satisfied with the result, we'll refund your money or provide additional optimization."
          }
        ]
      }
    }
  };
  
  const content = language === 'ru' ? texts.ru : texts.en;
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };
  
  const copyToClipboard = (text: string, type: 'discord' | 'telegram' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 2000);
  };

  const contactInfo = {
    discord: "adlerpwnz#1337",
    telegram: "@adlerpwnz",
    email: "contact@byadlerpwnz.com"
  };

  return (
    <Layout>
      <div className="container py-8 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{content.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{content.description}</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{content.form.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <div className="p-6 text-center text-green-600 dark:text-green-400">
                  <CheckCircle className="mx-auto h-12 w-12 mb-4" />
                  <p className="text-lg font-medium">{content.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">{content.form.name}</label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">{content.form.email}</label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">{content.form.message}</label>
                    <Textarea id="message" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full gradient-bg btn-animation">
                    {content.form.send}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          
          {/* Direct Contact */}
          <Card>
            <CardHeader>
              <CardTitle>{content.social.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="mr-4 rounded-full w-10 h-10 flex items-center justify-center gradient-bg">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{content.social.discord}</h3>
                    <p className="text-sm text-muted-foreground">{contactInfo.discord}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard(contactInfo.discord, 'discord')}
                    className="btn-animation"
                  >
                    {copied.discord ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">{copied.discord ? content.copied : content.copy}</span>
                  </Button>
                </div>
                
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="mr-4 rounded-full w-10 h-10 flex items-center justify-center gradient-bg">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{content.social.telegram}</h3>
                    <p className="text-sm text-muted-foreground">{contactInfo.telegram}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard(contactInfo.telegram, 'telegram')}
                    className="btn-animation"
                  >
                    {copied.telegram ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">{copied.telegram ? content.copied : content.copy}</span>
                  </Button>
                </div>
                
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <div className="mr-4 rounded-full w-10 h-10 flex items-center justify-center gradient-bg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{content.social.email}</h3>
                    <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="btn-animation"
                  >
                    {copied.email ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">{copied.email ? content.copied : content.copy}</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">{content.faq.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {content.faq.items.map((item, i) => (
              <Card key={i} className="btn-animation">
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
