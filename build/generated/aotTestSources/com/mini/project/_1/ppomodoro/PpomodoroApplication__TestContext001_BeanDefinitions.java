package com.mini.project._1.ppomodoro;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;
import org.springframework.context.annotation.ConfigurationClassUtils;

/**
 * Bean definitions for {@link PpomodoroApplication}.
 */
@Generated
public class PpomodoroApplication__TestContext001_BeanDefinitions {
  /**
   * Get the bean definition for 'ppomodoroApplication'.
   */
  public static BeanDefinition getPpomodoroApplicationBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(PpomodoroApplication.class);
    beanDefinition.setTargetType(PpomodoroApplication.class);
    ConfigurationClassUtils.initializeConfigurationClass(PpomodoroApplication.class);
    beanDefinition.setInstanceSupplier(PpomodoroApplication$$SpringCGLIB$$0::new);
    return beanDefinition;
  }
}
