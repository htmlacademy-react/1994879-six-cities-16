type PremiumProps = {
  className: string;
}

const Premium = ({className}: PremiumProps) => (
  <div className={className}>
    <span>Premium</span>
  </div>
);

export default Premium;
