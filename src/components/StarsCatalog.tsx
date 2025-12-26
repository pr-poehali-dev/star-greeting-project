import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface StarsCatalogProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const StarsCatalog = ({ selectedCategory, setSelectedCategory }: StarsCatalogProps) => {
  const [selectedStar, setSelectedStar] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const categories = [
    { id: 'all', name: 'Все', icon: 'Sparkles' },
    { id: 'actors', name: 'Актёры', icon: 'Film' },
    { id: 'singers', name: 'Певцы', icon: 'Mic2' },
    { id: 'bloggers', name: 'Блогеры', icon: 'Video' },
    { id: 'athletes', name: 'Спортсмены', icon: 'Trophy' },
  ];

  const stars = [
    {
      id: 1,
      name: 'Александр Петров',
      category: 'actors',
      description: 'Народный артист России',
      price: 15000,
      rating: 4.9,
      orders: 342,
      image: '🎭',
    },
    {
      id: 2,
      name: 'Мария Соколова',
      category: 'singers',
      description: 'Звезда эстрады',
      price: 20000,
      rating: 5.0,
      orders: 521,
      image: '🎤',
    },
    {
      id: 3,
      name: 'Дмитрий Лебедев',
      category: 'bloggers',
      description: '5M подписчиков',
      price: 8000,
      rating: 4.8,
      orders: 892,
      image: '📹',
    },
    {
      id: 4,
      name: 'Екатерина Волкова',
      category: 'athletes',
      description: 'Олимпийская чемпионка',
      price: 12000,
      rating: 4.9,
      orders: 234,
      image: '🏆',
    },
    {
      id: 5,
      name: 'Иван Козлов',
      category: 'actors',
      description: 'Театр и кино',
      price: 18000,
      rating: 4.7,
      orders: 456,
      image: '🎬',
    },
    {
      id: 6,
      name: 'Анна Белова',
      category: 'singers',
      description: 'Оперная дива',
      price: 25000,
      rating: 5.0,
      orders: 178,
      image: '🎵',
    },
  ];

  const handleGenerateText = async (occasion: string, recipientName: string) => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const templates: Record<string, string> = {
      birthday: `Дорогой ${recipientName}! Поздравляю тебя с днём рождения! Желаю счастья, здоровья, успехов во всех делах и исполнения самых заветных желаний! Пусть каждый день приносит радость и новые достижения!`,
      wedding: `Дорогие ${recipientName}! От всей души поздравляю вас с этим прекрасным днём! Пусть ваша любовь будет крепкой и вечной, а семейная жизнь наполнена счастьем и гармонией!`,
      anniversary: `Поздравляю с годовщиной, ${recipientName}! Желаю вам продолжать радовать друг друга, беречь вашу любовь и создавать новые счастливые моменты вместе!`,
      corporate: `Уважаемая команда! Поздравляю вас с отличными результатами! ${recipientName}, вы показали себя как настоящие профессионалы. Желаю дальнейших успехов!`,
      other: `${recipientName}, поздравляю тебя! Желаю всего самого наилучшего, крепкого здоровья и позитивного настроения!`,
    };
    
    setGeneratedText(templates[occasion] || templates.other);
    setIsGenerating(false);
  };

  const filteredStars =
    selectedCategory === 'all' ? stars : stars.filter((star) => star.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? 'default' : 'outline'}
            className={
              selectedCategory === cat.id
                ? 'bg-gradient-purple text-white border-0'
                : 'border-purple-200 hover:bg-purple-50'
            }
            onClick={() => setSelectedCategory(cat.id)}
          >
            <Icon name={cat.icon} size={16} className="mr-2" />
            {cat.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
        {filteredStars.map((star) => (
          <Dialog key={star.id}>
            <DialogTrigger asChild>
              <Card
                className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100 overflow-hidden group"
                onClick={() => setSelectedStar(star)}
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {star.image}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{star.name}</h3>
                      <p className="text-sm text-muted-foreground">{star.description}</p>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-0">
                      <Icon name="Star" size={12} className="mr-1" />
                      {star.rating}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Icon name="ShoppingBag" size={14} />
                      {star.orders} заказов
                    </span>
                    <span className="font-bold text-lg text-purple-600">от {star.price.toLocaleString()}₽</span>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Заказать поздравление от {selectedStar?.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Повод для поздравления</label>
                  <Select name="occasion">
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите повод" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">День рождения</SelectItem>
                      <SelectItem value="wedding">Свадьба</SelectItem>
                      <SelectItem value="anniversary">Годовщина</SelectItem>
                      <SelectItem value="corporate">Корпоратив</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 flex items-center justify-between">
                    <span>Текст поздравления</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 h-auto p-0 hover:bg-transparent"
                      onClick={() => {
                        const occasion = (document.querySelector('[name="occasion"]') as HTMLInputElement)?.value || 'other';
                        const recipient = (document.querySelector('[name="recipient"]') as HTMLInputElement)?.value || 'друг';
                        handleGenerateText(occasion, recipient);
                      }}
                      disabled={isGenerating}
                    >
                      <Icon name={isGenerating ? "Loader2" : "Sparkles"} size={14} className={`mr-1 ${isGenerating ? 'animate-spin' : ''}`} />
                      {isGenerating ? 'Генерирую...' : 'Сгенерировать текст'}
                    </Button>
                  </label>
                  <Textarea 
                    placeholder="Напишите текст, который должна озвучить звезда..." 
                    rows={4}
                    value={generatedText}
                    onChange={(e) => setGeneratedText(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя получателя</label>
                  <Input name="recipient" placeholder="Например: Алексей" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Выберите тариф</label>
                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="audio">Аудио - 700₽</SelectItem>
                      <SelectItem value="video30">Видео 30 сек - 1 450₽</SelectItem>
                      <SelectItem value="video60">Видео 1 мин - 2 000₽</SelectItem>
                      <SelectItem value="custom">Индивидуальный</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-gradient-purple text-white hover:opacity-90" size="lg">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Оформить заказ за {selectedStar?.price.toLocaleString()}₽
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default StarsCatalog;
