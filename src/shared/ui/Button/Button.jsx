import { Ellipsis } from 'lucide-react'
import { getStyle } from '../../lib/getStyle'
import styles from './Button.module.scss'

export const Button = ({
    children,
    className,
    color, // primary | secondary | outline | transparent | disabled
    circle,
    cta,
    loading,
    ...otherProps
}) => {

    const mode = {
        [styles.circle]: circle,
        [styles.cta]: cta,
    }

    const additional = [
        styles[color],
        className
    ]

    return (
            <button
                className={getStyle(styles.button, mode, additional)}
                {...otherProps}
            >
                {loading? <Ellipsis className={styles.loading}/>: children}

                {!cta && <span className={styles.underLine} />}
            </button>
    
    )
}