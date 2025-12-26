import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';

const Index = () => {
  const [selectedStar, setSelectedStar] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExample, setSelectedExample] = useState<any>(null);
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

  const examples = [
    {
      id: 1,
      title: 'День рождения',
      description: 'Тёплое поздравление с пожеланиями',
      duration: '45 сек',
      icon: '🎂',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      text: 'Дорогой Алексей! Поздравляю тебя с днём рождения! Желаю счастья, здоровья и успехов во всех начинаниях!',
    },
    {
      id: 2,
      title: 'Свадьба',
      description: 'Романтичное видео для молодожёнов',
      duration: '60 сек',
      icon: '💍',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      text: 'Дорогие молодожёны! От всей души поздравляю вас с этим важным днём! Пусть ваша любовь будет крепкой и вечной!',
    },
    {
      id: 3,
      title: 'Корпоратив',
      description: 'Поздравление для команды',
      duration: '30 сек',
      icon: '🎉',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      text: 'Уважаемая команда! Поздравляю с отличными результатами этого года! Вы — лучшие!',
    },
    {
      id: 4,
      title: 'Признание в чувствах',
      description: 'Нежное сообщение для любимых',
      duration: '40 сек',
      icon: '❤️',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      text: 'Милая моя! Ты — самая прекрасная на свете. Люблю тебя больше всего на свете!',
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

  const pricingPlans = [
    {
      name: 'Аудио',
      price: '700₽',
      duration: 'Без ограничений',
      delivery: '2-4 часа',
      features: ['Голос звезды', 'MP3 формат', 'Составление текста бесплатно'],
      icon: 'Mic2',
      gradient: 'from-orange-400 to-pink-500',
    },
    {
      name: 'Видео 30 сек',
      price: '1 450₽',
      duration: 'До 30 секунд',
      delivery: '4-6 часов',
      features: ['Видео HD', 'Голос + видеоряд', 'Составление текста бесплатно', 'Фоновая музыка'],
      icon: 'Video',
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Видео 1 мин',
      price: '2 000₽',
      duration: '30-60 секунд',
      delivery: '6-8 часов',
      features: [
        'Видео Full HD',
        'Расширенный контент',
        'Составление текста бесплатно',
        'Музыка и эффекты',
      ],
      icon: 'Film',
      gradient: 'from-purple-600 to-blue-500',
    },
    {
      name: 'Индивидуальный',
      price: 'Договорная',
      duration: 'Свыше 2 минут',
      delivery: 'По согласованию',
      features: [
        'Любая длительность',
        'Премиум качество',
        'Составление текста бесплатно',
        'Полная кастомизация',
        'Приоритетная поддержка',
      ],
      icon: 'Crown',
      gradient: 'from-purple-700 to-indigo-600',
    },
  ];

  const filteredStars =
    selectedCategory === 'all' ? stars : stars.filter((star) => star.category === selectedCategory);

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
                    <Select>
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
                    <Select name="occasion" defaultValue="standard">
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

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-orange text-white border-0 px-4 py-1">
            <Icon name="Lightbulb" size={14} className="mr-1" />
            Вдохновение
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Примеры видеопоздравлений</h2>
          <p className="text-muted-foreground text-lg">Посмотрите, что можно создать с помощью нейросетей</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example) => (
            <Dialog key={example.id}>
              <DialogTrigger asChild>
                <Card
                  className="hover:shadow-xl transition-all duration-300 border-purple-100 cursor-pointer group"
                  onClick={() => setSelectedExample(example)}
                >
                  <div className="h-40 bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 relative">
                    {example.icon}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Icon name="Play" size={48} className="text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2 flex items-center justify-between">
                      {example.title}
                      <Badge variant="outline" className="text-xs">
                        {example.duration}
                      </Badge>
                    </h3>
                    <p className="text-sm text-muted-foreground">{example.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-2">
                    <span>{selectedExample?.icon}</span>
                    {selectedExample?.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    <video 
                      controls 
                      className="w-full h-full"
                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%239b87f5' width='800' height='450'/%3E%3Ctext fill='white' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80 %D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%3C/text%3E%3C/svg%3E"
                    >
                      <source src={selectedExample?.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="MessageSquare" size={18} />
                      Текст поздравления:
                    </h4>
                    <p className="text-sm text-muted-foreground italic">"{selectedExample?.text}"</p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-purple text-white hover:opacity-90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Заказать похожее
                    </Button>
                    <Button variant="outline" className="border-purple-200 hover:bg-purple-50">
                      <Icon name="Share2" size={18} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-cosmic text-white border-0 px-4 py-1">
            <Icon name="Zap" size={14} className="mr-1" />
            Тарифы
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Выберите свой план</h2>
          <p className="text-muted-foreground text-lg">От быстрых поздравлений до премиум-качества</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'border-purple-500 border-2 scale-105' : 'border-purple-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-purple text-white border-0 px-4">Популярный</Badge>
                </div>
              )}
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                  <Icon name={plan.icon} className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4 bg-gradient-purple bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    Длительность: {plan.duration}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Rocket" size={16} />
                    Доставка: {plan.delivery}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-purple text-white hover:opacity-90'
                      : 'border-purple-200 hover:bg-purple-50'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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