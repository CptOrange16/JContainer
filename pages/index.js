import { Auth } from '../components/auth'

const Index = ({data}) => {
    // let isLoggedIn = localStorage.getItem('isLoggedIn')

    return <>
    {/* {((isLoggedIn)? null: <Auth />)} */}
    {data}
    </>
}

export async function getServerSideProps(context){
    const {check} = require('../lib/test')
    let data = check('Souvik')


    return {
        props: {
            data
        }
    }
}

export default Index