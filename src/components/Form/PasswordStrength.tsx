function PasswordStrength({ strength }: { strength: number }) {
  const getProgressBarColor = (value: number) => {
    switch (value) {
      case 1:
        return 'bg-red-400 border-red-400';
      case 2:
        return 'bg-yellow-400 border-yellow-400';
      case 3:
        return 'bg-blue-400 border-blue-400';
      case 4:
        return 'bg-green-400 border-green-400';
      default:
        return '';
    }
  };

  return (
    <div className="absolute -top-5 right-1 flex gap-1.5">
      <span
        className={`w-4 h-4 rounded-full border border-gray-400 transition-colors duration-400 
                    ${strength > 0 ? getProgressBarColor(strength) : ''}`}
      />
      <span
        className={`w-4 h-4 rounded-full border border-gray-400 transition-colors duration-400 
                    ${strength > 1 ? getProgressBarColor(strength) : ''}`}
      />
      <span
        className={`w-4 h-4 rounded-full border border-gray-400 transition-colors duration-400 
                    ${strength > 2 ? getProgressBarColor(strength) : ''}`}
      />
      <span
        className={`w-4 h-4 rounded-full border border-gray-400 transition-colors duration-400 
                    ${strength > 3 ? getProgressBarColor(strength) : ''}`}
      />
    </div>
  );
}

export default PasswordStrength;
