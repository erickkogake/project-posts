import { Avatar } from './Avatar'
import { Comments } from './Comments'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {

    const publishedAtTitle = format(publishedAt, 'yyyy-MM-dd')
    const publishedAtNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl}></Avatar>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtTitle} dateTime='2022-05-11 08:13:30'>{publishedAtNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p>{line.content}</p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong> Deixa seu feedback</strong>
                <textarea placeholder='Escreva um comentário...'>

                </textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comments></Comments>
                <Comments></Comments>
                <Comments></Comments>
            </div>
        </article>
    )
}