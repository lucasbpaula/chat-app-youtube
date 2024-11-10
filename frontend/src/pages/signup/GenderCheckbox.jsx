const GenderCheckbox = () => {
  return (
    <div className="mt-2 flex gap-4">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-purple-900 [--chkbg:theme(colors.purple.600)] [--chkfg:theme(colors.gray.400)]"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-purple-900 [--chkbg:theme(colors.purple.600)] [--chkfg:theme(colors.gray.400)]"
          />
        </label>
      </div>
      <div></div>
    </div>
  )
}

export default GenderCheckbox
