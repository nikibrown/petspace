// import { designTokens } from "./designTokens"

// {
//     /* <Text as="p" center variant="lead">
//     {props.text}
// </Text> */
// }

// type WithChildren<T = {}> = T & { children?: React.ReactNode }

// interface BaseProps {
//     as?: React.ElementType | React.FC
//     className?: string
// }

// export function Base({
//     as: Component = "div",
//     className,
//     ...props
// }: BaseProps) {
//     return <Component className={cx(..._cx, className)} {...props} />
// }

// interface TextProps extends BaseProps {
//     variant?: styles.TextVariants
//     center?: boolean
//     bold?: boolean
// }

// export function Text({
//     variant = "body",
//     center = false,
//     bold = false,
//     ...props
// }: WithChildren<TextProps>) {
//     return (
//         <Base
//             cx={[
//                 styles.text[variant],
//                 center && styles.text.center,
//                 bold && styles.text.bold,
//             ]}
//             {...props}
//         />
//     )
// }
