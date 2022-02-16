import './aboutlogo.css';

function Aboutlogo({ black }) {
    let classLogo = 'mainLogo';
    let src = "/assets/main beans.svg";
    if (black) {
        classLogo += ' black'
        src = '/assets/main_beans_blc.svg'
    }
    return (
        <div className={classLogo}>
            <img src={src} alt="beans" />
        </div>
    );
}

export default Aboutlogo;