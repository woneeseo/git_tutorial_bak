import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    // {date, title, amount} => 하나의 객체값을 파괴하여 각각의 객체값으로 가져오는 것
    // const expenseDate = new Date(2023, 7, 22);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmout = 294.69;
    // props can use components dinamicaly 상위 컴포넌트에서 하위 컴포넌트로 변수를 넘겨받을 때는 props를 이용
    return (
        <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        </Card>
    );
    }
    
    export default ExpenseItem;