import classes from './PageHeader.module.css';

const PageHeader = () => {
    return (
        <div className={classes.Container}>
        <hr />
        <h1>{}</h1>
        </div>
    );
};

export default PageHeader;