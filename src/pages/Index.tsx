import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/40">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center">
              <Icon name="Car" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>ДРАЙВ</span>
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-purple-600 transition-colors font-medium">Главная</button>
            <button onClick={() => scrollToSection('prices')} className="hover:text-purple-600 transition-colors font-medium">Цены</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-purple-600 transition-colors font-medium">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-purple-600 transition-colors font-medium">Контакты</button>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            Записаться
          </Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 text-sm px-4 py-1">
                Обучение с 2010 года
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Права категории{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                  B
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Научим уверенно водить автомобиль за 2 месяца. Современные машины, опытные инструкторы и гибкий график занятий
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg px-8 h-14">
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 text-lg px-8 h-14 hover:bg-gray-50">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>2000+</div>
                  <div className="text-sm text-gray-600">Выпускников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>95%</div>
                  <div className="text-sm text-gray-600">Сдают с 1 раза</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>15</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
              <img 
                src="https://cdn.poehali.dev/projects/dcda7811-f01f-4c2b-ad66-a693b43026ac/files/a435fb42-be92-4910-bd1c-a473538c50c7.jpg"
                alt="Обучение вождению"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="GraduationCap" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Опытные инструкторы</h3>
                <p className="text-gray-600">Стаж работы от 10 лет, индивидуальный подход к каждому</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Car" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Новые автомобили</h3>
                <p className="text-gray-600">Весь автопарк 2022-2024 года выпуска с АКПП и МКПП</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Calendar" className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Гибкий график</h3>
                <p className="text-gray-600">Занятия 7 дней в неделю, выбирайте удобное время</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Тарифы обучения
            </h2>
            <p className="text-xl text-gray-600">Выберите подходящий пакет для себя</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Базовый</h3>
                  <div className="text-4xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    35 000₽
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Теория 120 часов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Практика 56 часов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Учебные материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Автодром</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-purple-500 shadow-2xl relative scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-1">
                  Популярный
                </Badge>
              </div>
              <CardContent className="pt-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Стандарт</h3>
                  <div className="text-4xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    45 000₽
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Всё из Базового</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>+10 часов практики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Город с инструктором</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Симулятор вождения</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>VIP</h3>
                  <div className="text-4xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    65 000₽
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Всё из Стандарт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>+20 часов практики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Личный инструктор</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Сопровождение на экзамен</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Отзывы наших учеников
            </h2>
            <p className="text-xl text-gray-600">Более 2000 довольных выпускников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Отличная автошкола! Инструктор Сергей очень терпеливый и всё понятно объясняет. Сдала экзамен с первого раза!
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                    АМ
                  </div>
                  <div>
                    <div className="font-semibold">Анна Морозова</div>
                    <div className="text-sm text-gray-500">Октябрь 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Современные машины, удобный график. Теория была интересной, а на практике научился всему необходимому. Рекомендую!
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    ДК
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий Козлов</div>
                    <div className="text-sm text-gray-500">Сентябрь 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Боялась водить, но инструкторы настолько профессиональны, что страх прошёл уже после третьего занятия. Спасибо вам!
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    ЕС
                  </div>
                  <div>
                    <div className="font-semibold">Елена Смирнова</div>
                    <div className="text-sm text-gray-500">Ноябрь 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">Запишитесь на первое бесплатное занятие</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardContent className="pt-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-gray-600">г. Москва, ул. Ленина, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">info@drive-school.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <p className="text-gray-600">Пн-Вс: 9:00 - 21:00</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/dcda7811-f01f-4c2b-ad66-a693b43026ac/files/022940f3-e176-4983-b878-9a729a891d11.jpg"
                    alt="Автодром"
                    className="rounded-2xl w-full shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="pt-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="example@mail.ru"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea 
                      rows={4}
                      placeholder="Расскажите о себе и когда хотели бы начать обучение..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 h-12 text-base">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center">
              <Icon name="Car" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>ДРАЙВ</span>
          </div>
          <p className="text-gray-400">Автошкола категории B</p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500 pt-8">© 2024 ДРАЙВ. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
