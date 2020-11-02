import ContentLoader from "react-content-loader";

const LoadingBlock = () => {

  return (
    <div>
      <p>Вы запустили json-server?</p>
      <p>npm run server во втором терминале</p>
        <ContentLoader
          speed={2}
          width={280}
          height={445}
          viewBox="0 0 280 435"
          backgroundColor="#f5f5f5"
          foregroundColor="#d9d9d9"
        >
          <rect x="359" y="310" rx="0" ry="0" width="2" height="5" />
          <rect x="21" y="7" rx="12" ry="12" width="229" height="229" />
          <rect x="18" y="255" rx="6" ry="6" width="241" height="24" />
          <rect x="3" y="290" rx="14" ry="14" width="280" height="75" />
          <rect x="6" y="434" rx="0" ry="0" width="53" height="27" />
          <rect x="17" y="379" rx="6" ry="6" width="71" height="35" />
          <rect x="116" y="376" rx="19" ry="19" width="162" height="45" />
        </ContentLoader>

    </div>

  )
}
export default LoadingBlock