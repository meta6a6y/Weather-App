# Weather-App
Приложение для просмотра текущей погоды в городах с использованием OpenWeatherMap API.

<h2>Запуск проекта</h2>

<ol>
  <li>Склонируйте репозиторий:
    <pre><code>git clone https://github.com/meta6a6y/Weather-App</code></pre>
  </li>
  <li>Установите зависимости:
    <pre><code>npm install</code></pre>
  </li>
  <li>Создайте файл <code>.env</code> в корне проекта и добавьте ваш API-ключ:
    <pre><code>VITE_WEATHER_API_KEY=ваш_ключ_от_api</code></pre>
  </li>
  <li>Запустите приложение:
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<hr />

<h2>Получение API-ключа</h2>

<ul>
  <li>Перейдите на <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></li>
  <li>Зарегистрируйтесь и получите API-ключ (есть бесплатный тариф)</li>
  <li>Добавьте ключ в файл <code>.env</code>, как показано выше</li>
</ul>

<hr />

<h2>Технологии</h2>

<ul>
  <li>Vue 3</li>
  <li>Vuetify</li>
  <li>Pinia</li>
  <li>OpenWeatherMap API</li>
</ul>

<hr />

<h2>Краткое описание решения</h2>
<ul>
  <li>Ввод и поиск городов с использованием геокодирования OpenWeatherMap.</li>
  <li>Отображение текущей погоды: город, температура, описание, иконка и дата.</li>
  <li>Реактивное управление состоянием через Pinia — список городов и данные о погоде обновляются при изменении автоматически.</li>
  <li>Удаление городов из списка.</li>
  <li>Использование Vuetify для удобного интерфейса.</li>
  <li>Обработка ошибок при загрузке данных и информирование пользователя.</li>
  <li>Разделение кода на отдельные компоненты.</li>
</ul>
