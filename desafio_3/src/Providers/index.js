import {StatesAppProvider} from './StatesApp'

const Providers = ({children}) => {
return (
    <StatesAppProvider>{children}</StatesAppProvider>
)
}
export default Providers