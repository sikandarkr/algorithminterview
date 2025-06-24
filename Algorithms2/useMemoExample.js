
// Scenario: E-commerce App – Product Filtering
const filterProduct = useMemo(()=>{

    return filterProduct = products.filter(product=>product.category===selectedCategory);

},[products, selectedCategory]);

// Avoid Re-rendering Child Components

//Scenerios: Passing the stable props to the child component

const chartConfig = useMemo(() => ({ darkTheme: true }), []);
<ChartComponent config={chartConfig} />

