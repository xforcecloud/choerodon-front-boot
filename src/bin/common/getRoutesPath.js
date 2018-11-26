import fs from 'fs';
import path from 'path';
import nunjucks from 'nunjucks';
import getPackageRoute from './getPackageRoute';
import context from './context';
import escapeWinPath from './escapeWinPath';

const routesTemplate = fs.readFileSync(path.join(__dirname, '../../nunjucks/routes.nunjucks.js')).toString();

export default function getRoutesPath(packageInfo, configEntryName, dashboardPath) {
  const { tmpDirPath, isDev, choerodonConfig: { routes } } = context;
  const configRoutes = routes || getPackageRoute(packageInfo);
  const routesPath = path.join(tmpDirPath, `routes.${configEntryName}.js`);
  nunjucks.configure(routesPath, {
    autoescape: false,
  });
  fs.writeFileSync(
    routesPath,
    nunjucks.renderString(routesTemplate, {
      routes: Object.keys(configRoutes).map(key => (
        `createRoute("/${key}", function() { return import("${escapeWinPath(path.join(process.cwd(), configRoutes[key]))}"); })`
      )).join(',\n'),
      dashboardPath: escapeWinPath(dashboardPath),
      source: isDev ? 'src' : 'lib',
    }),
  );
  return routesPath;
}
