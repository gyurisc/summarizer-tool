import styles from "../styles/loadingDots.module.css";

// source: https://github.com/Nutlope/twitterbio

const LoadingDots = ({
    color = "#000",
    style = "small",
}: {
    color: string;
    style: string;
}) => {
    <span className={style == "small" ? styles.loading2 : styles.loading}>
        <span style={{ backgroundColor: color }} />
        <span style={{ backgroundColor: color }} />
        <span style={{ backgroundColor: color }} />
    </span>
}

export default LoadingDots;

LoadingDots.defaultProps = {
    style: "small",
};
