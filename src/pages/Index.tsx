import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/HeroSection';
import StarsCatalog from '@/components/StarsCatalog';
import ExamplesSection from '@/components/ExamplesSection';
import PricingSection from '@/components/PricingSection';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-purple flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-purple bg-clip-text text-transparent">
                  StarGreet AI
                </h1>
                <p className="text-xs text-muted-foreground">Поздравления от звёзд с ИИ</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={18} className="mr-2" />
                Поиск
              </Button>
              <Button size="sm" className="bg-gradient-purple text-white hover:opacity-90">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <HeroSection />

      <StarsCatalog selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <ExamplesSection />

      <PricingSection />

      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Sparkles" size={48} className="mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">Готовы удивить близких?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Создайте уникальное видеопоздравление от любимой звезды прямо сейчас
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Icon name="Play" size={20} className="mr-2" />
            Начать создание
          </Button>
        </div>
      </section>

      <footer className="bg-white border-t border-purple-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={20} className="text-purple-600" />
              <span>© 2024 StarGreet AI. Все права защищены.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-600 transition-colors">
                О нас
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Контакты
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Поддержка
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
