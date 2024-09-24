import Title from '../ui/components/Title'
import Alert from '../ui/components/Alert'

export default function AlertApp() {
  return (
    <div className='container text-center'>
        <Title text="Alert Popups" classes='title' />
        <Alert 
        type={"success"}
        message='Successful login'
        delay={true} 
        />   
        <Alert 
        type={"info"}
        message='Successful login'
        delay={true} 
        />   
        <Alert 
        type={"warning"}
        message='Successful login'
        delay={true} 
        /> 
    </div>
  )
}
