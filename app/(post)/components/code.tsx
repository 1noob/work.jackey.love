export const Code = ({ children }) => {
  return (
    <code
      className={`
        font-pixel
        [p_&]:text-sm
        [p_&]:px-1
        [p_&]:py-0.5
        [p_&]:rounded-sm
        [p_&]:bg-gray-200
        dark:[p_&]:bg-[#333]
      `}
    >
      {children}
    </code>
  );
};
