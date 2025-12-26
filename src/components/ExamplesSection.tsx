import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const ExamplesSection = () => {
  const [selectedExample, setSelectedExample] = useState<any>(null);

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

  return (
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
  );
};

export default ExamplesSection;
