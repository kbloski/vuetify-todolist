# Todolist application with vuetify, plan

Pages
  - About App (basic info about application) {When create, how technologies used, some about me }
  - Side with CRUD application
  - Side with all tasks 
  - side with all tasks for day, such as dayPlan ( check date max to next month / 30 days )
  - Side with categories

Components 
  Layout
    + TheNavigation
    + TheHeader
  
  Forms
    + TaskForm  
    - CategoryForm

  Lists
    + TasksList
    - CategoriesLists

  - SearchPanel
  - TasksFilter // for all and for one day (date between) default on, props data-betweenDates='true'

Functions: 
  1. CRUD taska
  2. Przechowywanie tasków do miesiąca wstecz ( umieścić notkę w modalu wejściowym )
  3. Przechowywanie tasków w localstorage
      task: {
         id: number,
         categoryID: number,
         expires: number, (miliseconts),
         createdAt: date,
         title: string,
         description: string || undefined,
         priority: number,
         timeStart: date || null, // witch out
         timeEnd: date || null, // witchout
      }
  5. Możliwość filtrowania tasków przez prioryty, dzień czy godziny
  6. Blokowanie godzin w których są już używane taski
  7. Taski bez czasu są wyświetlane jako dodatkowe
  8. Możliwość nadawania priorytetu taskowi
  9. Wyświetlenie planu dnia wraz z taska, użycie kolorów do identyfikacji taska)
  10. Dodanie kategori
      category: {
          id: number,
          icon: string, // any emoticons ( for prototype 10 )
          title: string,
          description: string || null,
      }
  12. Localstorage dla kategorii
  13. 
    
  

