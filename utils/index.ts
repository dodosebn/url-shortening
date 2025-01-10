import axios from 'axios'; 

const shortenUrl = async (urlToShorten: string): Promise<string | undefined> => {
    const apiEndpoint = 'https://cleanuri.com/api/v1/shorten';
    const data = new URLSearchParams({ url: urlToShorten });

    try {
        const response = await axios.post(apiEndpoint, data.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            timeout: 5000, 
        });

        if (response.data && response.data.result_url) {
            console.log(`Shortened URL: ${response.data.result_url}`);
            return response.data.result_url;
        } else {
            console.error('Error: No result_url found in response');
            return undefined;
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error details:', error.toJSON());
            console.error('Error message:', error.message);
            // Additional logging for network error
            if (error.message === 'Network Error') {
                console.error('Network Error: Please check your internet connection or CORS settings.');
            }
        } else {
            console.error('Unexpected error:', error.message);
        }
        return undefined;
    }
};

export default shortenUrl;
