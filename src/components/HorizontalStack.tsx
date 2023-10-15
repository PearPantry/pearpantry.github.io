import Stack from '@mui/material/Stack'
import MacReview from '../components/Mac'
import BurReview from '../components/Burrito'
import RiceReview from '../components/FriedRice'
import "../styles/HorizontalStack.css";

function HorizontalStack() {
    return (
        <Stack direction="row" spacing={2} className='horizontalStack'>
            <MacReview />
            <BurReview />
            <RiceReview />
        </Stack>
    );
}

export default HorizontalStack;
