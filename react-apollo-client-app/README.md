
### Create New React Project `npx create-react-app .`

### Material-UI Dependencies:

    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/material @mui/styled-engine-sc styled-components
    npm install @fontsource/roboto
    npm install @mui/icons-material
    npm install @mui/x-data-grid

### GraphQL Apollo Client Dependencies:
    
    npm install @apollo/client graphql

### Development `npm start`

### Deployment `npm run build`

### Test `Chalk` library
    node ./test.js


## `HTML & CSS`
[![SC2 Video](https://img.youtube.com/vi/QXPWs00RD3A/0.jpg)](https://www.youtube.com/watch?v=QXPWs00RD3A&list=PLjpp5kBQLNTRItQMAaiiPvPngathdUw5J)
[![SC2 Video](https://img.youtube.com/vi/WyxzAU3p8CE/0.jpg)](https://www.youtube.com/watch?v=WyxzAU3p8CE&list=PLjpp5kBQLNTRItQMAaiiPvPngathdUw5J&index=2)

## `JavaScript`
[![SC2 Video](https://img.youtube.com/vi/FDZIt1MDuBI/0.jpg)](https://www.youtube.com/watch?v=FDZIt1MDuBI&list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG&index=14)
[![SC2 Video](https://img.youtube.com/vi/XFEAMyB85RA/0.jpg)](https://www.youtube.com/watch?v=XFEAMyB85RA&list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG&index=17)

## `FullStack Development`
[![SC2 Video](https://img.youtube.com/vi/HVjjoMvutj4/0.jpg)](https://www.youtube.com/watch?v=HVjjoMvutj4)

## `ReactJS`
[![SC2 Video](https://img.youtube.com/vi/F18Rxw6ftcM/0.jpg)](https://www.youtube.com/watch?v=F18Rxw6ftcM)

## `React Hooks`
[![SC2 Video](https://img.youtube.com/vi/9DMN7EGA9Dg/0.jpg)](https://www.youtube.com/watch?v=9DMN7EGA9Dg&list=PLolI8AY2AS9a2mL2j7GbJIsF-KkvBKt1K&index=3)

## `NodeJS AXIOS`
[![SC2 Video](https://img.youtube.com/vi/Gl-vOU7ZU9A/0.jpg)](https://www.youtube.com/watch?v=Gl-vOU7ZU9A&t=61s)

## `Apollo Graph Client`
https://www.apollographql.com/docs/react/get-started/
https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
[![SC2 Video](https://img.youtube.com/vi/yqWzCV0kU_c/0.jpg)](https://www.youtube.com/watch?v=yqWzCV0kU_c&list=PLpPqplz6dKxXICtNgHY1tiCPau_AwWAJU&index=10)


## `Sample TestData Online`
    https://reqres.in/
    https://jsonplaceholder.typicode.com/


## `Apollo Graph Client Query Example`
```
    const GET_SELLER_PHOTO = gql`
    query seller($seller: String!) {
        seller(seller: $seller) {
        id
        image
        }
    }
    `;

--- Class Component ---

    const SellerPhoto = ({ seller }) => (
        <Query query={GET_SELLER_PHOTO} variables={{ seller }}>
            {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return `Something went wrong: ${error}`;
            
                return (
                    <img src={data.seller.image}/>
                );
            }}
        </Query>
    );

--- Functional Component ---

    function SellerPhoto({ seller }) {
        const { loading, error, data } = useQuery(GET_SELLER_PHOTO, {
            variables: { seller }
        });
        
        if (loading) return null;
        if (error) return `Something went wrong: ${error}`;
        
        return (
            <img src={data.seller.image} />
        );
    }
```