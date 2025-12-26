import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PricingSection = () => {
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

  return (
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
  );
};

export default PricingSection;
