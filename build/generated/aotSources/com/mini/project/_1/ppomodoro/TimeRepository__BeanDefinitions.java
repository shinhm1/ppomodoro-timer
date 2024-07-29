package com.mini.project._1.ppomodoro;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * Bean definitions for {@link TimeRepository}.
 */
@Generated
public class TimeRepository__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'timeRepository'.
   */
  private static BeanInstanceSupplier<TimeRepository> getTimeRepositoryInstanceSupplier() {
    return BeanInstanceSupplier.<TimeRepository>forConstructor(JdbcTemplate.class)
            .withGenerator((registeredBean, args) -> new TimeRepository(args.get(0)));
  }

  /**
   * Get the bean definition for 'timeRepository'.
   */
  public static BeanDefinition getTimeRepositoryBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(TimeRepository.class);
    beanDefinition.setInstanceSupplier(getTimeRepositoryInstanceSupplier());
    return beanDefinition;
  }
}
