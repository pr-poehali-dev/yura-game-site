import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const characters = [
    {
      name: "Киберстраж",
      role: "Защитник",
      image: "img/b93fc95a-3909-4b9d-a6b3-77f0aa1397d8.jpg",
      description: "Элитный воин будущего с невероятными способностями"
    },
    {
      name: "Нова",
      role: "Ассасин", 
      image: "img/23a6c677-45ca-4e37-afc3-9a8211130357.jpg",
      description: "Быстрая и смертоносная охотница за головами"
    }
  ];

  const news = [
    {
      title: "Обновление 2.5: Новые миссии",
      date: "14 сентября 2025",
      text: "Добавлены 10 новых захватывающих миссий в киберпространстве"
    },
    {
      title: "Турнир чемпионов",
      date: "10 сентября 2025", 
      text: "Присоединяйтесь к глобальному турниру и выиграйте эксклюзивные награды"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-game-bg via-game-primary to-game-bg text-game-text font-roboto">
      {/* Navigation */}
      <nav className="bg-game-primary/80 backdrop-blur-sm border-b border-game-accent/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-orbitron font-bold text-game-accent">
              CYBER WARS
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-game-accent transition-colors">Главная</a>
              <a href="#about" className="hover:text-game-accent transition-colors">О игре</a>
              <a href="#characters" className="hover:text-game-accent transition-colors">Персонажи</a>
              <a href="#news" className="hover:text-game-accent transition-colors">Новости</a>
              <a href="#screenshots" className="hover:text-game-accent transition-colors">Скриншоты</a>
              <a href="#download" className="hover:text-game-accent transition-colors">Скачать</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-game-accent/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 animate-glow">
            CYBER WARS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-game-muted max-w-3xl mx-auto">
            Окунитесь в мир будущего, где технологии правят миром. 
            Станьте легендарным воином киберпространства.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-game-accent hover:bg-game-accent/80 text-white px-8 py-6 text-lg animate-float">
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <Button variant="outline" className="border-game-accent text-game-accent hover:bg-game-accent hover:text-white px-8 py-6 text-lg">
              <Icon name="Youtube" className="mr-2" />
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </section>

      {/* About Game */}
      <section id="about" className="py-16 bg-game-primary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-game-accent">
            О игре
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Будущее в ваших руках</h3>
              <p className="text-game-muted mb-6 text-lg">
                Cyber Wars — это революционная мобильная игра, которая перенесет вас в мир 2087 года. 
                Человечество живет в симбиозе с искусственным интеллектом, но не все согласны с новым порядком.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Icon name="Zap" className="text-game-accent mr-3" />
                  <span>Динамичные бои</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" className="text-game-accent mr-3" />
                  <span>Мультиплеер</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Trophy" className="text-game-accent mr-3" />
                  <span>Рейтинговые бои</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Gamepad2" className="text-game-accent mr-3" />
                  <span>Простое управление</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="img/10ec27a4-07d2-49d1-af54-b8f62ecd7600.jpg" 
                alt="Игровой процесс"
                className="rounded-lg shadow-2xl border border-game-accent/30 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Characters */}
      <section id="characters" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-game-accent">
            Персонажи
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {characters.map((character, index) => (
              <Card key={index} className="bg-game-primary border-game-secondary hover:border-game-accent transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-game-accent">
                      {character.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-game-text mb-2">{character.name}</CardTitle>
                  <CardDescription className="text-game-muted">
                    {character.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-16 bg-game-primary/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-game-accent">
            Новости
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="bg-game-primary border-game-secondary hover:border-game-accent transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-game-text">{item.title}</CardTitle>
                    <Badge variant="outline" className="border-game-accent text-game-accent">
                      {item.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-game-muted">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-game-accent">
            Скриншоты
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img 
              src="img/10ec27a4-07d2-49d1-af54-b8f62ecd7600.jpg" 
              alt="Скриншот игры 1"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-game-accent/30"
            />
            <img 
              src="img/b93fc95a-3909-4b9d-a6b3-77f0aa1397d8.jpg" 
              alt="Скриншот игры 2"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-game-accent/30"
            />
            <img 
              src="img/23a6c677-45ca-4e37-afc3-9a8211130357.jpg" 
              alt="Скриншот игры 3"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-game-accent/30"
            />
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 bg-gradient-to-r from-game-secondary to-game-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-8 text-game-accent">
            Скачать игру
          </h2>
          <p className="text-xl text-game-muted mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к миллионам игроков по всему миру. 
            Загрузите Cyber Wars бесплатно на ваше устройство.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-game-accent hover:bg-game-accent/80 text-white px-10 py-6 text-lg rounded-xl">
              <Icon name="Apple" className="mr-3" />
              App Store
            </Button>
            <Button className="bg-game-accent hover:bg-game-accent/80 text-white px-10 py-6 text-lg rounded-xl">
              <Icon name="Play" className="mr-3" />
              Google Play
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-game-muted">
            <div className="flex items-center">
              <Icon name="Star" className="text-yellow-400 mr-2" />
              4.8 из 5.0
            </div>
            <div className="flex items-center">
              <Icon name="Download" className="text-game-accent mr-2" />
              10M+ загрузок
            </div>
            <div className="flex items-center">
              <Icon name="Shield" className="text-green-400 mr-2" />
              Бесплатно
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-game-bg border-t border-game-accent/20 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-game-accent mb-4">
              CYBER WARS
            </div>
            <p className="text-game-muted mb-6">
              © 2025 Cyber Wars. Все права защищены.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-game-muted hover:text-game-accent transition-colors">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="text-game-muted hover:text-game-accent transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-game-muted hover:text-game-accent transition-colors">
                <Icon name="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;