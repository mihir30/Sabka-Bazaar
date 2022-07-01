import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import renderer from 'react-test-renderer';

describe("checking the category labels are rendered properly",()=>{
    it('bakery label',async()=>{
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const label=await screen.findByText('Bakery Cakes and Dairy');
        expect(label).toBeInTheDocument();
    });
    it('beverages label',async()=>{
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const label=await screen.findByText('Beverages');
        expect(label).toBeInTheDocument();
    });
    it('baby care label',async()=>{
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const label=await screen.findByText('Baby Care');
        expect(label).toBeInTheDocument();
    });
    it('beauty and hygiene',async()=>{
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const label=await screen.findByText('Beauty and Hygiene');
        expect(label).toBeInTheDocument();
    });
    it('fruits and vegetables',async()=>{
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const label=await screen.findByText('Fruits & Vegetables');
        expect(label).toBeInTheDocument();
    });
})
describe("category component",()=>{
    
    it('bakery description', async() => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const categoryText = await screen.findByText('The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.');
        expect(categoryText).toBeInTheDocument();
    });
    it('Beverages description', async() => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const categoryText = await screen.findByText('Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.');
        expect(categoryText).toBeInTheDocument();
    });
    
    it('Beauty & hygiene description', async() => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const categoryText = await screen.findByText('Buy beauty and personal care products online in India at best prices.');
        expect(categoryText).toBeInTheDocument();
    });

    
    it('Baby care description', async() => {
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const categoryText = await screen.findByText('Shop online for Baby Products, Diapers, Skin Care Products,etc.');
        expect(categoryText).toBeInTheDocument();
    });
    

    it('should have right Category component snapshot', () => {
        const tree =renderer.create(<BrowserRouter><HomePage/></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
describe("checking the carousel section images are rendered properly",()=>{
    it('image1',async()=>{
        render(<BrowserRouter><HomePage/></BrowserRouter>);
        const altText=await screen.findByAltText('Independence Day Deal - 25% off on shampoo');
        expect(altText).toBeInTheDocument();
    });
})