import styles from './Avatar.module.css'

export function Avatar({hasBorder, src}) {
    return (
        <img className={hasBorder ? styles.avatar : styles.avatarComment} src={src}></img>
    )
}