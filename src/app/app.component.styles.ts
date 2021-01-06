import { Styles } from "jss";

export const red: string = '#F44336';
export const green: string = '#4CAf50';
export const blue: string = '#2196F3';

export const styles: (Partial<Styles>) = {
    title: {
        textAlign: 'center',
        backgroundColor: '#E0E0E0',
        '&:hover': {
            backgroundColor: '#BDBDBD'
        }
    },
    area: {
        width: '100%',
        height: '10rem',
        color: 'white',
        backgroundColor: (data: any) => data.area.backgroundColor
    }
}