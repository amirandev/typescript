export class ApiPostDataService {

    public postData() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'TSU',
                body: 'We learn typescript',
                userId: 1,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                console.log('POST response:', json);
                return json;
            })
            .catch(error => {
                console.error('POST error:', error);
                return error;
            });
    }






}