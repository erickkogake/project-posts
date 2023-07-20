import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'

export function Comments() {
    return (
        <div className={styles.comments}>
            <Avatar hasBorder={false} src={'https://github.com/erickkogake.png'}></Avatar>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Erick Kogake</strong>
                            <time title={new Date()} dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}></Trash>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp></ThumbsUp>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}