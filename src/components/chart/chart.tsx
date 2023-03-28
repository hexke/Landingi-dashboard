
import { Line } from 'react-chartjs-2';
import { IProduct } from '../../interface/interface';
import styled from 'styled-components';
import { ChartOptions } from 'chart.js';
import { calculateSingleDiscountedPrice } from '../../utils/cart';

const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        autoPadding: true,
        padding: 30,
    },
    scales: {
        y: {
            title: {
                display: true,
                text: "Dollars",
            },
            beginAtZero: true,
        },
        x: {
            beginAtZero: true,
            ticks: {
                minRotation: 70,
                maxRotation: 80,
            },
        },

    },
}

const StyledChartContainer = styled.div`
position: relative;
height: 400px;
`;

export const Chart = ({ products }: { products: IProduct[] }) => {

    return (
        <StyledChartContainer>
            <Line
                datasetIdKey='id'
                options={options}
                data={{
                    labels: products.map(product => product.title.slice(0, 15) + "..."),
                    datasets: [
                        {
                            label: 'full price',
                            data: products.map(product => product.price),
                            backgroundColor: 'red',
                            borderColor: 'transparent'
                        },
                        {
                            label: 'discounted price',
                            data: products.map(product => calculateSingleDiscountedPrice(product.discountedPrice, product.quantity)),
                            backgroundColor: 'blue',
                            borderColor: 'transparent'
                        }
                    ]
                }}
            />
        </StyledChartContainer>
    );
}

export default Chart;
