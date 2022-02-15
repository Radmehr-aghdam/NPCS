export default function test() {
    return (
        <div>
            test page
        </div>
    );
}


export const getServerSideProps = async (req) => {

    // This process will help to protect your test api and pages on server and 
    // use it easly on localhost
    const TEST_MODE = process.env.TEST_MODE

    if (TEST_MODE == 'off') {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            }
        }
    } else {
        // starting the test page code!




        return {
            props: {
                data: null
            }
        }
    }
}