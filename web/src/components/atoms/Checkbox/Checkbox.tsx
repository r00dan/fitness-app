import style from './Checkbox.module.scss';

export function Checkbox(props: JSX.IntrinsicElements['input']) {
  return (
    <label className={style.label}>
      <input type="checkbox" {...props} />
    </label>
  )
}
