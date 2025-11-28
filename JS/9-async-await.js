async function fetchData(url) {
    try {
        console.log('Начинаем загрузку данных...');
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        
        console.log('Данные успешно загружены!');
        return data;
        
    } catch (error) {
        console.error('Произошла ошибка при загрузке данных:', error.message);
        throw error;
    }
}

async function loadUserData() {
    try {
        const userData = await fetchData('https://jsonplaceholder.typicode.com/users/1');
        console.log('Данные пользователя:', userData);
        return userData;
    } catch (error) {
        console.error('Не удалось загрузить данные пользователя');
        return null;
    }
}



loadUserData();
