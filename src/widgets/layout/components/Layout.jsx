import PropTypes from 'prop-types';
import { Navigation } from '../../../features/navigation';
import { Sidebar } from '../../../features/sidebar'


const Layout = ({children}) => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};