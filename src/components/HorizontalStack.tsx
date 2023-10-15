import Stack from '@mui/material/Stack'
import MacReview from '../components/Mac'
import BurReview from '../components/Burrito'
import RiceReview from '../components/FriedRice'

function HorizontalStack() {
    return (
        <Stack direction="row" spacing={2}>
            <MacReview />
            <BurReview />
            <RiceReview />
        </Stack>
    );
}

export default HorizontalStack;
