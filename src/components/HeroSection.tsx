import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
      <Badge className="mb-4 bg-gradient-purple text-white border-0 px-4 py-1">
        <Icon name="Sparkles" size={14} className="mr-1" />
        Нейросети создают реалистичные видео
      </Badge>
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
        Видеопоздравления
        <br />
        от любимых звёзд
      </h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Закажите персональное поздравление с голосом и манерой любой знаменитости. ИИ создаст уникальное
        видео за считанные часы.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Button size="lg" className="bg-gradient-purple text-white hover:opacity-90 shadow-lg">
          <Icon name="Video" size={20} className="mr-2" />
          Заказать поздравление
        </Button>
        <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
          <Icon name="Play" size={20} className="mr-2" />
          Посмотреть примеры
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
