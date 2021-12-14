import NavBar from './NavBar';
import Banner from './Banner';
import { Box, makeStyles } from '@material-ui/core';
import Slide from './Slide';
import MidSection from './MidSection';
import MidSlide from './MidSlide';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions.js';
// import{products} from '../../constants/data'
import {useEffect} from 'react';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }, 
    rightWrapper:{
    		 margin: '12px',
        background: '#FFFFFF',
        width: '17%',
        marginLeft: 10,
        padding: 5,
        
    }

})


const Home = () => {
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
	 const classes = useStyle();

	 	   const getProducts = useSelector(state => state.getProducts);
	 	   	 const { products, error } = getProducts;







	 	   	 	const dispatch = useDispatch();

			    useEffect(() => {
			        dispatch(listProducts())
			    }, [dispatch])







	    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Home;























